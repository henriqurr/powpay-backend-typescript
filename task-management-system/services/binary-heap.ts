export class BinaryHeap<T> {
  private elements: T[] = [];
  private readonly compare: (a: T, b: T) => number;

  constructor(compare: (a: T, b: T) => number) {
    this.compare = compare; // a > b = true
  }

  public add(element: T): void {
    this.elements.push(element);
    this.shiftUp();
  }

  public extractRoot(): T | null {
    if (this.elements.length === 0) return null;
    if (this.elements.length === 1) return this.elements.pop()!;

    const root = this.elements[0];

    this.elements[0] = this.elements.pop()!;
    this.shiftDown();

    return root;
  }

  public peekRoot(): T | null {
    return this.elements.length > 0 ? this.elements[0] : null;
  }

  public getAllElements(): T[] {
    return this.elements.slice();
  }

  private shiftUp(): void {
    let currentIndex = this.elements.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (this.compare(this.elements[currentIndex], this.elements[parentIndex]) > 0) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  private shiftDown(): void {
    let currentIndex = 0;

    while (this.hasLeftChild(currentIndex)) {
      let dominantChildIndex = this.getLeftChildIndex(currentIndex);

      if (this.hasRightChild(currentIndex)) {
        const rightChildIndex = this.getRightChildIndex(currentIndex);

        if (this.compare(this.elements[rightChildIndex], this.elements[dominantChildIndex]) > 0) {
          dominantChildIndex = rightChildIndex;
        }
      }

      if (this.compare(this.elements[dominantChildIndex], this.elements[currentIndex]) > 0) {
        this.swap(currentIndex, dominantChildIndex);
        currentIndex = dominantChildIndex;
      } else {
        break;
      }
    }
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.elements.length;
  }

  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.elements.length;
  }

  private swap(a: number, b: number): void {
    [this.elements[a], this.elements[b]] = [this.elements[b], this.elements[a]];
  }
}
