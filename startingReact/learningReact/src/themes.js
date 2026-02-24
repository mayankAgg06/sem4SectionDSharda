// Theme data for your React mini theme changer
// Each theme contains color values that you can apply to your app

const themes = [
  {
    id: 1,
    name: 'Light',
    colors: {
      primary: '#007AFF',
      secondary: '#5AC8FA',
      background: '#FFFFFF',
      text: '#000000',
      accent: '#FF2D55',
    },
  },
  {
    id: 2,
    name: 'Dark',
    colors: {
      primary: '#0A84FF',
      secondary: '#5AC8FA',
      background: '#1C1C1E',
      text: '#FFFFFF',
      accent: '#FF375F',
    },
  },
  {
    id: 3,
    name: 'Ocean',
    colors: {
      primary: '#0047AB',
      secondary: '#40E0D0',
      background: '#E0F6FF',
      text: '#003D82',
      accent: '#FF6B9D',
    },
  },
  {
    id: 4,
    name: 'Forest',
    colors: {
      primary: '#228B22',
      secondary: '#90EE90',
      background: '#F0FFF0',
      text: '#1B3A1B',
      accent: '#FF8C42',
    },
  },
  {
    id: 5,
    name: 'Sunset',
    colors: {
      primary: '#FF6B35',
      secondary: '#FFB627',
      background: '#FFF8DC',
      text: '#4A2C2A',
      accent: '#D62828',
    },
  },
  {
    id: 6,
    name: 'Purple Dreams',
    colors: {
      primary: '#9D4EDD',
      secondary: '#C77DFF',
      background: '#F3E5FF',
      text: '#3A0CA3',
      accent: '#FF006E',
    },
  },
];

export default themes