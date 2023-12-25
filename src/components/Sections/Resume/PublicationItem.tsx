import {FC, memo, useState} from 'react';

import {PublicationItem} from '../../../data/dataDef';
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid';

const PublicationItem: FC<{item: PublicationItem}> = memo(({item}) => {
  const {title, date, location, content, url, authors, cite_as} = item;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{authors}</span>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      <div>
        <span
          className="cursor-pointer flex items-center"
          onClick={toggleCollapse}
        >
          {isCollapsed ? (
            <ChevronDownIcon className="h-5 w-5" />
          ) : (
            <ChevronUpIcon className="h-5 w-5" />
          )}
          <span className="ml-1">
            {isCollapsed ? 'Expand Abstract' : 'Collapse Abstract'}
          </span>
        </span>
        {!isCollapsed && (
          <div className="mt-2 text-gray-700">{content}</div>
        )}
      </div>
      <div className="mt-2">
        <span className="text-blue-500">{url}</span>
      </div>
      <div className="mt-2">
        <span>{cite_as}</span>
      </div>
    </div>
  );
});

PublicationItem.displayName = 'PublicationItem';
export default PublicationItem;
