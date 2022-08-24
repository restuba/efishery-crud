import React, { useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import Wrapper, { MenuItem } from './style';
import { ClickOut } from '../../atoms';

const Index = (props) => {
  const {
    items = [],
    className,
    optionIcon,
    minWidth,
    renderElement,
    padding,
    menusStyle,
    ghost,
  } = props;
  const [isShow, setIsShow] = useState(false);

  return (
    <Wrapper className={className ?? ''} minWidth={minWidth} padding={padding}>
      <div
        className={`component_action_menu ${ghost && 'ghost'}`}
        aria-hidden="true"
        onClick={(e) => {
          e.stopPropagation();
          setIsShow(true);
        }}
      >
        {optionIcon || <MoreOutlined />}
      </div>
      <ClickOut
        onClickOutside={() => {
          setIsShow(false);
        }}
      >
        <div
          className="component_action_menu_items"
          style={{
            display: isShow ? 'block' : 'none',
            ...menusStyle,
          }}
        >
          {renderElement && (
            <div className="component_action_menu_element">
              {renderElement(isShow, setIsShow)}
            </div>
          )}
          {items?.length > 0 &&
            items.map((item, index) => {
              return (
                <MenuItem
                  key={item.id}
                  onClick={() => {
                    if (item?.onClick) {
                      item.onClick();
                      setIsShow(false);
                    }
                  }}
                  className={`${item.type || ''} ${
                    index === items.length - 1 && 'last'
                  }`}
                >
                  <div className="component_action_menu_icon">{item.icon}</div>
                  <div className="font-paragraph ">{item.text}</div>
                </MenuItem>
              );
            })}
        </div>
      </ClickOut>
    </Wrapper>
  );
};

export default Index;
