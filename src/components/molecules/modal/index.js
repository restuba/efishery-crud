/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { Button, Typography } from '../../atoms';
import Wrapper from './style';

const Index = (props) => {
  const {
    isShow,
    title = 'Title Modal',
    children,
    type = 'default',
    okText = 'Cta',
    okForm,
    onCancel,
    okDisabled,
    width,
    className,
    onOk,
    cancelText,
    isLoadingButton,
    okHtmlType = 'submit',
    bodyBorderBottom = false,
    zIndex,
    marginTop,
    hideFooter = false,
    hideCancelBtn = false,
    backgroundColor,
  } = props;

  useEffect(() => {
    isShow && (document.body.style.overflow = 'hidden');
    !isShow && (document.body.style.overflow = 'unset');
  }, [isShow]);

  return (
    <Wrapper
      isShow={isShow}
      width={width}
      bodyBorderBottom={bodyBorderBottom}
      zIndex={zIndex}
      marginTop={marginTop}
      backgroundColor={backgroundColor}
    >
      <div className="container_modal_wrapper">
        <div className={`container_modal_content ${className ?? ''}`}>
          <div className="component_header">
            <div className="component_header_title">
              <Typography size={{ sm: 1.2, md: 1.4 }}>{title}</Typography>
            </div>
          </div>
          <div className="component_body">{children}</div>
          {!hideFooter && (
            <div className="component_footer">
              {!hideCancelBtn && (
                <Button
                  type={type === 'danger' ? 'white' : 'secondary'}
                  onClick={onCancel}
                  loading={isLoadingButton}
                  htmlType="button"
                >
                  {cancelText ?? 'Cancel'}
                </Button>
              )}
              <Button
                type={type === 'danger' ? 'danger' : 'primary'}
                form={okForm}
                disabled={okDisabled}
                htmlType={okHtmlType}
                onClick={onOk}
                loading={isLoadingButton}
              >
                {okText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
