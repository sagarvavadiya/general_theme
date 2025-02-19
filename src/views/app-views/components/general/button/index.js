/** @jsxImportSource @emotion/react */
import { Component } from "react";
import DemoCard from "components/util-components/DemoCard";
import ApiContainer from "components/util-components/ApiContainer";
import { Row, Col } from 'antd';
import basicMd from './markdown/basic.md';
import iconMd from './markdown/icon.md';
import sizeMd from './markdown/size.md';
import disabledMd from './markdown/disabled.md';
import loadingMd from './markdown/loading.md';
import multipleMd from './markdown/multiple.md';
import ghostMd from './markdown/ghost.md';
import blockMd from './markdown/block.md';
import dangerMd from './markdown/danger.md';
import indexMd from './markdown/index.en-US.md'
import Basic from './Basic';
import Size from './Size';
import Loading from './Loading';

import Block from './Block';
import Icon from './Icon';
import Disabled from './Disabled';
import Multiple from './Multiple';
import Danger from './Danger'
import Ghost from './Ghost';
import { css } from '@emotion/react';
import CopyContent from "./CopyContent";

export class ButtonComponent extends Component {

	render() {
		return (
			<div css={css`
				.ant-btn {
					margin-right: 8px;
					margin-bottom: 12px;
				}

				.ant-btn-group > .ant-btn,
				.ant-btn-group > span > .ant-btn {
					margin-right: 0;
				}

				.ant-btn-group {
					margin-right: 8px;
				}
			`}>
				<Row gutter={16} type="flex" >
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={basicMd}><Basic /></DemoCard>
						<DemoCard code={sizeMd}><Size /></DemoCard>
						<DemoCard code={loadingMd}><Loading /></DemoCard>
						<DemoCard code={ghostMd}><Ghost /></DemoCard>
						<DemoCard code={blockMd}><Block /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={iconMd}><Icon /></DemoCard>
						<DemoCard code={disabledMd}><Disabled /></DemoCard>
						<DemoCard code={multipleMd}><Multiple /></DemoCard>
						<DemoCard code={dangerMd}><Danger /></DemoCard>
						<DemoCard code={blockMd}><CopyContent /></DemoCard>
					</Col>
				</Row>
				<ApiContainer code={indexMd}/>
			</div>
		);
	}
}

export default ButtonComponent;
