import React, { Component } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import reqwest from 'reqwest';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../../utils/firebase';

const UploadManually = () => {
  return (
    <div>
      <input type='file' />
    </div>
  );
};

export default UploadManually;
