import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';
import UnmissableTeaser from './UnmissableTeaser';
import { Unmissable } from './Unmissable';

export type UnmissableSectionType = {
  id: string,
  description?: string,
  title: string,
  unmissables: Unmissable[],
};

export type UnmissableSectionProps = {
  unmissableSection: UnmissableSectionType,
};

function UnmissableSection({ unmissableSection }: UnmissableSectionProps) {
  return (
    <>
      <h2 className="unmissable-title">{unmissableSection.title}</h2>
      {
        unmissableSection.description && unmissableSection.description !== ''
        && <ReactMarkdown className="unmissable-description" source={unmissableSection.description} />
      }

      <div className="unmissables-container">
        {
          unmissableSection.unmissables.map(
            (unmissable, index) => <UnmissableTeaser unmissable={unmissable} index={index} key={uuidv4()} />,
          )
        }
      </div>
    </>
  );
}

export default UnmissableSection;
