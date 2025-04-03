'use client';

import type { DragEndEvent } from '@dnd-kit/core';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { MenuSquareIcon } from 'lucide-react';
import type { FC } from 'react';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { For } from '@/components/utils/for';
import { cn } from '@/libraries/tailwind-utils';

export const Notes = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const [items, setItems] = useState<SortableLinkCardProps['id'][]>([
    { name: 'NextJS', id: 1693653637084 },
    { name: 'ReactJS', id: 1693653637086 },
    { name: 'Astro', id: 1693653637088 },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.id === active.id);
        const newIndex = prevItems.findIndex((item) => item.id === over?.id);

        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Frameworks</CardTitle>
        <CardDescription>
          Frameworks with drag and drop with dnd-kit
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <For each={items}>
              {(item) => <SortableLinks key={item.id} id={item} />}
            </For>
          </SortableContext>
        </DndContext>
      </CardContent>
    </Card>
  );
};

interface SortableLinkCardProps {
  id: {
    id: number;
    name: string;
  };
}

const SortableLinks: FC<SortableLinkCardProps> = ({ id }) => {
  const uniqueId = id.id;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: uniqueId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isCursorGrabbing = attributes['aria-pressed'];

  return (
    <Card ref={setNodeRef} style={style} key={uniqueId}>
      <CardContent className="flex items-center justify-between">
        <h4>{id.name}</h4>
        <Button
          {...attributes}
          {...listeners}
          className={cn(isCursorGrabbing ? 'cursor-grabbing' : 'cursor-grab')}
          aria-describedby={`DndContext-${uniqueId}`}
          size="icon"
          variant="ghost"
        >
          <MenuSquareIcon className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
