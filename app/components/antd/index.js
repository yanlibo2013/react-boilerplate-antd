import { Layout } from 'antd';

import styled from 'styled-components';
const { Sider } = Layout;

const SiderBar = styled(Sider)`
  flex: 0 0 30rem !important;
  max-width: 30rem !important;
  min-width: 30rem !important;
  width: 30rem !important;
`;

export default SiderBar;

// const SiderBar = Sider.extend`
//   flex: 0 0 14rem;
//   max-width: 14rem;
//   min-width: 14rem;
//   width: 14rem;
// `;

// export default SiderBar;
