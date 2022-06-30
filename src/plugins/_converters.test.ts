import { ImageCache } from '../imagecache';
import PluginConverter from './_converters';

let imagecache;

beforeAll(() => {
  imagecache = new ImageCache([]);
});

test('converts dimensions', () => {
  const convertDimension = PluginConverter.actions.convertDimension;
  
  expect(convertDimension(imagecache, '80%', 100)).toEqual(80);
  expect(convertDimension(imagecache, '1234')).toEqual(1234);
  expect(convertDimension(imagecache, 1234)).toEqual(1234);
});

test('converts positions', () => {
  const convertPosition = PluginConverter.actions.convertPosition;
  
  expect(convertPosition(imagecache, 'left', 0, 1000)).toEqual(0);
  expect(convertPosition(imagecache, 'top', 0, 1000)).toEqual(0);
  expect(convertPosition(imagecache, 'center', 1000, 500)).toEqual(250);
  expect(convertPosition(imagecache, 'right', 300, 1000)).toEqual(300);
  expect(convertPosition(imagecache, 'bottom', 300, 1000)).toEqual(300);

  expect(convertPosition(imagecache, 'bottom', 300)).toEqual(300);

  expect(convertPosition(imagecache, '1234', 100, 1000)).toEqual(1234);
  expect(convertPosition(imagecache, '80%', 100, 1000)).toEqual(80);
 });