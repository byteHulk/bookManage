import React from 'react';
import { Card, Upload, Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import styles from './index.less';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
  };

  componentDidMount() {
    this.getAdv();
  }

  componentWillUnmount() {}

  getAdv = () => {
    const { dispatch } = this.props;
    const that = this;
    dispatch({
      type: 'ui/getAdv',
      callback({ data }) {
        that.setState({
          fileList: [
            {
              uid: '-xxx',
              name: 'image.png',
              status: 'done',
              url: data,
            },
          ],
        });
        console.log(data);
        // setImageUrl(data);
      },
    });
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    const uploadProps = {
      name: 'file',
      action: 'http://huangbowen.cn:2915/api/v1/config/uploadFile?type=advert',
      // data: { file: 'file', type: 'advert' },
      accept: 'image/*',
      listType: 'picture-card',
      fileList,
      onPreview: this.handlePreview,
      onChange: this.handleChange,
    };
    return (
      <Card
        title="广告屏更换"
        bordered={false}
        // style={{
        //   display: 'flex',
        //   flexDirection: 'row',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   background: '#fff',
        // }}
      >
        <Upload {...uploadProps}>{fileList.length >= 1 ? null : uploadButton}</Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </Card>
    );
  }
}

export default connect(({ ui }) => ({
  ...ui,
}))(PicturesWall);
