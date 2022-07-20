/* eslint import/no-extraneous-dependencies: 0 */
import renderer from 'react-test-renderer';

export const screenShot = (
  nextElement: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
) => {
  const component = renderer.create(nextElement);
  const tree = component.toJSON();
  return tree;
};
