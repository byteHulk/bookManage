import React, { useEffect, useState } from 'react';
import { Card, Upload, Modal } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

const Adv = (props) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFileList();
  }, []);

  const getFileList = () => {
    // console.log(color)
    const { dispatch } = props;
    dispatch({
      type: 'ui/getAdv',
      callback({ data }) {
        setImageUrl(data);
      },
    });
  };

  const handlePreview = (info) => {}
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      tsetLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  const uploadButton = (
    <div style={{width: '1080px', height: '1920px'}}>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <PageHeaderWrapper>
      <Card
        bordered={false}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Upload
          action="/api/config/uploadFile"
          listType="picture-card"
          showUploadList={false}
          beforeUpload={beforeUpload}
          className={styles.ss}
          data={(file) => {
            return {
              type: 'advert',
            };
          }}
          // fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {imageUrl ? (
            null
            // <img src={imageUrl} alt="avatar" className={styles.img} />
          ) : (
            uploadButton
          )}
        </Upload>
        {/* <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal> */}
      </Card>
    </PageHeaderWrapper>
  );
};

export default connect(({ ui }) => ({
  ...ui,
}))(Adv);

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
