import { NextComponentType, NextPageContext } from 'next';
import { Blog } from '@/types/model';
import styled from 'styled-components';

type Props = {
  className?: string;
  blogs: Blog[];
};

const Wrapper = styled.article`
  $host: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/';

  $big-stone: #152536;
  $white: #fff;
  $smalt-blue: #4e958b;
  $maroon-flush: #c32361;
  $black: #000;
  $lite-grey: rgba($black, 0.2);
  $lite-big-stone: rgba($big-stone, 0.7);

  $card-width: 350px;
  $card-height: 350px;

  $thumb-height: 260px;

  $border-radius: 3px;
  $box-shadow: 0 1px 4px rgba($black, 0.3);
  $transition: cubic-bezier(0.17, 0.67, 0.5, 1.03);
  $timing-1: 0.4s 0.15s;
  $timing-2: 0.5s 0.25s;

  $grotesque-black: 'Grotesque Black', sans-serif;
  $grotesque-regular: 'Grotesque', sans-serif;
  $merriweather: 'Merriweather', sans-serif;

  $new-york-city: '#{$host}new-york-city.png';
  $flag: '#{$host}flag.png';

  @mixin pos($pos, $left: null, $top: null, $right: null, $bottom: null) {
    position: $pos;
    left: $left;
    @if $top {
      top: $top;
    }
    @if $left {
      left: $left;
    }
    @if $right {
      right: $right;
    }
    @if $bottom {
      bottom: $bottom;
    }
  }

  @mixin size($width, $height) {
    width: $width;
    height: $height;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    background: $big-stone;
  }

  a[href] {
    position: relative;
    &,
    &:link,
    &:visited,
    &:active {
      text-decoration: none;
      color: lighten($maroon-flush, 5);
      text-shadow: 2px 2px 2px darken($big-stone, 10);
      padding-bottom: 3px;
      font-weight: bold;
    }
    &::after {
      content: '';
      @include pos(absolute, $left: 0, $bottom: 0);
      background: $white;
      @include size(0, 1px);
      transition: 0.35s $transition;
    }
    &:hover::after {
      width: 100%;
      box-shadow: $box-shadow;
    }
  }

  .note {
    margin-top: 30px;
    color: $white;
    font-size: 1rem;
    font-family: $merriweather;
    line-height: 1.5;
    text-align: center;
  }

  article.card {
    @include pos(absolute, 50%, 50%);
    @include size($card-width, $card-height);
    transform: translate(-50%, -50%) translateZ(0);
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    overflow: hidden;
    .thumb {
      @include size(auto, $thumb-height);
      background: url($new-york-city) no-repeat center;
      background-size: cover;
      border-radius: $border-radius;
    }
    .infos {
      @include size(auto, $card-height);
      position: relative;
      padding: 14px 24px;
      background: $white;
      transition: $timing-1 $transition;
      .title {
        position: relative;
        margin: 10px 0;
        letter-spacing: 3px;
        color: $big-stone;
        font-family: $grotesque-black;
        font-size: 1rem;
        text-transform: uppercase;
        text-shadow: 0 0 0px lighten($big-stone, 20);
      }
      .flag {
        @include pos(absolute, $top: 50%, $right: 0);
        transform: translateY(-50%);
        @include size(35px, 23px);
        background: url($flag) no-repeat top right;
        background-size: 100% auto;
        display: inline-block;
      }
      .date,
      .seats {
        margin-bottom: 10px;
        text-transform: uppercase;
        font-size: 0.85rem;
        color: $lite-big-stone;
        font-family: $grotesque-regular;
      }
      .seats {
        display: inline-block;
        margin-bottom: 24px;
        padding-bottom: 24px;
        border-bottom: 1px solid $lite-grey;
        opacity: 0;
        transition: $timing-2 $transition;
      }
      .txt {
        font-family: $merriweather;
        line-height: 2;
        font-size: 0.95rem;
        color: $lite-big-stone;
        opacity: 0;
        transition: $timing-2 $transition;
      }
      .details {
        @include pos(absolute, $left: 0, $bottom: 0);
        margin: 10px 0;
        padding: 20px 24px;
        letter-spacing: 1px;
        color: $smalt-blue;
        font-family: $grotesque-black;
        font-size: 0.9rem;
        text-transform: uppercase;
        cursor: pointer;
        opacity: 0;
        transition: $timing-2 $transition;
      }
    }
    &:hover .infos {
      transform: translateY(-$thumb-height);
      .seats,
      .txt,
      .details {
        opacity: 1;
      }
    }
  }
`;

export const Recommend: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  blogs,
}) => {
  return (
    <>
      {blogs.map((b, i) => {
        return (
          <Wrapper className={`card ${className}`} key={i}>
            <div className='thumb'></div>
            <div className='infos'>
              <h2 className='title'>
                new york city<span className='flag'></span>
              </h2>
              <h3 className='date'>november 2 - 4</h3>
              <h3 className='seats'>seats remaining: 2</h3>
              <p className='txt'>
                Join us for our Live Infinity Session in beautiful New York City. This is a 3 day
                intensive workshop where you&apos;ll learn how to become a better version of...
              </p>
              <h3 className='details'>event details</h3>
            </div>
          </Wrapper>
        );
      })}
    </>
  );
};
