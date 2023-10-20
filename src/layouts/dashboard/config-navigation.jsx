import SvgColor from 'src/components/svg-color';
import {AiTwotoneTool } from 'react-icons/ai'
import {BsCheckCircleFill, BsFillBarChartLineFill} from 'react-icons/bs'
import {MdReport} from 'react-icons/md'

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: <BsFillBarChartLineFill/>,
  },
  {
    title: 'Report',
    path: '/user',
    icon: <MdReport/>,
  },
  {
    title: 'processing',
    path: '/user',
    icon: <AiTwotoneTool/>
  },
  {
    title: 'completed',
    path: '/products',
    icon: <BsCheckCircleFill />,
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
