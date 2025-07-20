import { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Rect, Text, Group } from 'react-konva';
import Konva from 'konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { ContentDetails } from '@/types/content';

const rectSize = { width: 140, height: 60 };
const margin = 40;
const centerX = 300;
const centerY = 300;

function getNodePosition(index: number, count: number) {
  const angle = (2 * Math.PI * index) / count;
  const distance = 180;

  const x = centerX + distance * Math.cos(angle);
  const y = centerY + distance * Math.sin(angle);
  return {
    x: x - rectSize.width / 2,
    y: y - rectSize.height / 2,
  };
}

interface ShapeProps extends ContentDetails {
  id: string;
  rectFill: string;
  textFill: string;
}
export default function Drawing({
  contentDetails,
  rootNode,
}: {
  contentDetails: ContentDetails[];
  rootNode: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  // const [text1Pos, setText1Pos] = useState({ x: 100, y: 100 });
  // const [text2Pos, setText2Pos] = useState({ x: 300, y: 200 });

  // const [message, setMessage] = useState('하이');
  const mainLayerRef = useRef<Konva.Layer>(null);
  const tempLayerRef = useRef<Konva.Layer>(null);
  const previousShapeRef = useRef<Konva.Shape | null>(null);

  // const stars = Array.from({ length: 10 }, (_, i) => ({
  //   id: i.toString(),
  //   x: size.width * Math.random(),
  //   y: size.height * Math.random(),
  //   fill: 'blue',
  //   name: `star ${i}`,
  // }));
  const shapeNode: ShapeProps[] = contentDetails.map((n, index) => ({
    ...n,
    id: `shape-${index}`,
    rectFill: 'black',
    textFill: 'white',
  }));

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const handleDragStart = (e: KonvaEventObject<DragEvent>) => {
    const shape = e.target;
    if (!shape) return;
    shape.moveTo(tempLayerRef.current);
    // setMessage('Moving ' + shape.name());
  };

  const handleDragMove = (e: KonvaEventObject<DragEvent>) => {
    const stage = e.target.getStage();
    if (!stage) return;
    const pos = stage.getPointerPosition();
    if (!pos) return;
    const shape = mainLayerRef.current
      ? mainLayerRef.current.getIntersection(pos)
      : null;
    if (previousShapeRef.current && shape) {
      if (previousShapeRef.current !== shape) {
        // leave from old target
        previousShapeRef.current.fire('dragleave', { evt: e.evt }, true);
        // enter new target
        shape.fire('dragenter', { evt: e.evt }, true);
        previousShapeRef.current = shape;
      } else {
        previousShapeRef.current.fire('dragover', { evt: e.evt }, true);
      }
    } else if (!previousShapeRef.current && shape) {
      previousShapeRef.current = shape;
      shape.fire('dragenter', { evt: e.evt }, true);
    } else if (previousShapeRef.current && !shape) {
      previousShapeRef.current.fire('dragleave', { evt: e.evt }, true);
      previousShapeRef.current = null;
    }
  };

  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    const shape = e.target.getParent();
    if (!shape) return;
    const stage = e.target.getStage();
    if (!stage) return;
    const pos = stage.getPointerPosition();
    if (!pos) return;
    const dropShape = mainLayerRef.current
      ? mainLayerRef.current.getIntersection(pos)
      : null;

    if (dropShape) {
      previousShapeRef.current?.fire('drop', { evt: e.evt }, true);
    }
    shape.moveTo(mainLayerRef.current);
    previousShapeRef.current = null;
  };

  // const handleDragEnter = (e: KonvaEventObject<DragEvent>) => {
  //   const shape = e.target.getParent();
  //   if (!shape) return;
  //   const rect = shape.findOne<Konva.Rect>('Rect');
  //   if (!rect) return;
  //   const text = shape.findOne<Konva.Text>('Text');
  //   if (!text) return;
  //   rect.fill('red');
  //   text.fill('black');
  //   // setMessage('dragenter ' + e.target.name());
  // };

  // const handleDragLeave = (e: KonvaEventObject<DragEvent>) => {
  //   const shape = e.target.getParent();
  //   if (!shape) return;
  //   const rect = shape.findOne<Konva.Rect>('Rect');
  //   if (!rect) return;
  //   const text = shape.findOne<Konva.Text>('Text');
  //   if (!text) return;
  //   rect.fill('white');
  //   text.fill('black');
  // };

  // const handleDragOver = (e: KonvaEventObject<DragEvent>) => {
  //   // setMessage('dragover ' + e.target.name());
  // };

  // const handleDrop = (e: KonvaEventObject<DragEvent>) => {
  //   const shape = e.target.getParent();
  //   if (!shape) return;
  //   const rect = shape.findOne<Konva.Rect>('Rect');
  //   if (!rect) return;
  //   const text = shape.findOne<Konva.Text>('Text');
  //   if (!text) return;
  //   rect.fill('yellow');
  //   text.fill('black');
  // };

  return (
    <div ref={ref} className="w-full h-full">
      <Stage width={size.width} height={size.height}>
        <Layer ref={mainLayerRef}>
          <Group
            x={centerX - rectSize.width / 2}
            y={centerY - rectSize.height / 2}
          >
            <Rect
              width={rectSize.width}
              height={rectSize.height}
              fill="#ffd700"
              shadowBlur={10}
            />
            <Text
              text={rootNode}
              width={rectSize.width}
              height={rectSize.height}
              align="center"
              verticalAlign="middle"
              fontSize={16}
              fontStyle="bold"
            />
          </Group>

          {/* 주변 노드 */}
          {shapeNode.map((n: ShapeProps, index: number) => {
            const { x, y } = getNodePosition(index, contentDetails.length - 1);
            const nodeCenterX = x + rectSize.width / 2;
            const nodeCenterY = y + rectSize.height / 2;

            return (
              <Group
                key={index}
                id={n.id}
                x={x}
                y={y}
                draggable
                onDragStart={handleDragStart}
                onDragMove={handleDragMove}
                onDragEnd={handleDragEnd}
                // onDragEnter={handleDragEnter}
                // onDragLeave={handleDragLeave}
                // onDragOver={handleDragOver}
                // onDrop={handleDrop}
              >
                <Rect
                  width={rectSize.width}
                  height={rectSize.height}
                  fill={n.rectFill}
                  cornerRadius={6}
                />
                <Text
                  text={n.title}
                  width={rectSize.width}
                  height={rectSize.height}
                  align="center"
                  verticalAlign="middle"
                  fill={n.textFill}
                  fontSize={14}
                />
              </Group>
            );
          })}
        </Layer>
        <Layer ref={tempLayerRef} />
      </Stage>
    </div>
  );
}

{
  /* Text 1
          <Text
            text="Text A"
            x={text1Pos.x}
            y={text1Pos.y}
            draggable
            fill="red"
            onDragMove={(e) => {
              setText1Pos({ x: e.target.x(), y: e.target.y() });
            }}
            onDragEnd={(e) => {
              setText1Pos({ x: e.target.x(), y: e.target.y() });
            }}
          />
         
          <Text
            text="Text B"
            x={text2Pos.x}
            y={text2Pos.y}
            draggable
            fill="blue"
            onDragMove={(e) => {
              setText2Pos({ x: e.target.x(), y: e.target.y() });
            }}
            onDragEnd={(e) => {
              setText2Pos({ x: e.target.x(), y: e.target.y() });
            }}
          />
          <Line
            points={[text1Pos.x + 50, text1Pos.y, text2Pos.x - 10, text2Pos.y]}
            stroke="black"
            strokeWidth={2}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
          /> */
}

//  {stars.map((star) => (
//       <Star
//         key={star.id}
//         id={star.id}
//         name={star.name}
//         x={star.x}
//         y={star.y}
//         numPoints={10}
//         innerRadius={20}
//         outerRadius={25}
//         fill={star.fill}
//         shadowOffsetX={5}
//         shadowOffsetY={5}
//         draggable
//         onDragStart={handleDragStart}
//         onDragMove={handleDragMove}
//         onDragEnd={handleDragEnd}
//         onDragEnter={handleDragEnter}
//         onDragLeave={handleDragLeave}
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//       />
//     ))}
