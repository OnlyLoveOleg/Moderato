export const domSelect = (s: string): Element => {
  const dom = document.querySelector(s);
  if (!dom) {
    throw new Error(`select not found: ${s}`);
  }
  return dom;
};

export const domSelectAll = (s: string): NodeListOf<Element> => {
  const doms = document.querySelectorAll(s);
  if (!doms) {
    throw new Error(`select not found: ${s}`);
  }
  return doms;
};

export const addClassName = (selector: Element | null, className: string) => {
  if (!selector) {
    throw new Error('domがNULLです');
  }
  selector.classList.add(className);
};

export const removeClassName = (selector: Element | null, className: string) => {
  if (!selector) {
    throw new Error('domがNULLのため削除ができません');
  }
  selector.classList.remove(className);
};

/** @desc 要素のクラス一覧を取得する */
export const getClassList = (selector: Element | null): DOMTokenList => {
  if (!selector) {
    throw new Error('domがNULLのためClass一覧が取得できません');
  }
  return selector.classList;
};
