import React, { useState } from 'react';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { Course, Section as SectionType, Subsection as SubsectionType } from '../types';
import Section from '../components/Section';

const initialCourse: Course = {
  id: '1',
  title: 'Introduction to React',
  description: 'Learn the fundamentals of React',
  sections: [
    {
      id: '1',
      title: 'Getting Started',
      isVisible: true,
      subsections: [
        {
          id: '1',
          title: 'Introduction',
          activities: [
            { id: '1', type: 'text', title: 'What is React?', content: '<p>React is a JavaScript library for building user interfaces.</p>' },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'Components',
      isVisible: true,
      subsections: [],
    },
  ],
};

const CourseBuilder: React.FC = () => {
  const [course, setCourse] = useState<Course>(initialCourse);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setCourse((course) => {
        const oldIndex = course.sections.findIndex((s) => s.id === active.id);
        const newIndex = course.sections.findIndex((s) => s.id === over.id);
        return {
            ...course,
            sections: arrayMove(course.sections, oldIndex, newIndex),
        };
      });
    }
  };

  const toggleSectionVisibility = (sectionId: string) => {
    setCourse(course => ({
      ...course,
      sections: course.sections.map(s =>
        s.id === sectionId ? { ...s, isVisible: !s.isVisible } : s
      ),
    }));
  };

  const addSection = () => {
    const newSection: SectionType = {
      id: `${Date.now()}`,
      title: `New Section ${course.sections.length + 1}`,
      isVisible: true,
      subsections: [],
    };
    setCourse(course => ({ ...course, sections: [...course.sections, newSection] }));
  };

  const deleteSection = (sectionId: string) => {
    setCourse(course => ({ ...course, sections: course.sections.filter(s => s.id !== sectionId) }));
  };

    const addSubsection = (sectionId: string) => {
        const newSubsection: SubsectionType = {
            id: `${Date.now()}`,
            title: `New Subsection`, // You can make this editable
            activities: [],
        };
        setCourse(course => ({
            ...course,
            sections: course.sections.map(s =>
                s.id === sectionId
                    ? { ...s, subsections: [...s.subsections, newSubsection] }
                    : s
            ),
        }));
    };

    const deleteSubsection = (sectionId: string, subsectionId: string) => {
        setCourse(course => ({
            ...course,
            sections: course.sections.map(s =>
                s.id === sectionId
                    ? { ...s, subsections: s.subsections.filter(sub => sub.id !== subsectionId) }
                    : s
            ),
        }));
    };

  return (
    <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <button onClick={addSection} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Section
            </button>
        </div>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={course.sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
          {course.sections.map(section => (
            <Section 
                key={section.id} 
                section={section} 
                toggleVisibility={toggleSectionVisibility} 
                deleteSection={deleteSection} 
                addSubsection={addSubsection}
                deleteSubsection={deleteSubsection}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default CourseBuilder;
