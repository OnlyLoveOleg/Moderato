import { render, screen } from '@testing-library/react';
import { Desc } from '@/components/organisms/about';
import { screenShot } from '@/tests/util';

describe('', () => {
  test('Check About Desc view', () => {
    render(<Desc />); // これでscreenから要素を取得できる。

    expect(screen.getByText('Coding in Design')).toBeInTheDocument();
    expect(
      screen.getByText(
        'My mission is to write coding as beautifully as design and to make the whole team excited!',
      ),
    ).toBeInTheDocument();
    // TODO GSAP対応は今度する
    // expect(
    //   screen.getByText(
    //     '千葉出身。都内（銀座）での美容師経験があるソフトウェアエンジニア。モデル撮影のために購入したmacを使っていたらPCの仕組みが気になり始め、気づいたらエンジニアに。人生まるごとクリエイティブだと思っている。人の髪をデザインしていた経験をIT業界へ活かせることはないか日々模索中。',
    //   ),
    // ).toBeInTheDocument();
  });

  test('Check snapshot', () => {
    const tree = screenShot(<Desc />);
    expect(tree).toMatchSnapshot();
  });
});
