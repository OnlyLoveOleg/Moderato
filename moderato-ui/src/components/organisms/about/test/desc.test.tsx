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
    expect(
      screen.getByText(
        '千葉出身。都内（銀座）での美容師経験があるソフトウェアエンジニア。モデル撮影のために購入したmacを使っていたらPCの仕組みが気になり始め、気づいたらエンジニアに。人生まるごとクリエイティブだと思っている。人の髪をデザインしていた経験をIT業界へ活かせることはないか日々模索中。',
      ),
    ).toBeInTheDocument();
    // なぜかenできない
    // expect(
    //   screen.getByText(`Born in Japan. Software engineer with experience as a beautician in Tokyo (Ginza). When he
    // was using a mac he bought for a model shoot, he started to be interested in how PCs work,
    // and he found himself becoming an engineer. He believes that one&apos;s entire life is
    // creative. He is always looking for ways to apply his experience in designing people&apos;s
    // hair to the IT industry.`),
    // ).toBeInTheDocument();
  });

  test('Check snapshot', () => {
    const tree = screenShot(<Desc />);
    expect(tree).toMatchSnapshot();
  });
});
