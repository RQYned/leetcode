export class Heap<T> {
  private container: T[]
  compare: Function
  constructor(arr: T[] = [], fn?: Function) {
    this.container = []
    if (fn) {
      this.compare = fn
    } else {
      this.compare = (v1: T, v2: T): boolean => {
        //>= 小顶堆
        return v1 >= v2
      }
    }

    if (Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this))
    }

  }

  insert(data: T) {
    const { container } = this

    container.push(data)
    let index = container.length - 1
    while (index) {
      let parent = Math.floor((index - 1) / 2)
      if (this.compare(container[index], container[parent])) {
        break
      }
      this.swap(container, index, parent)
      index = parent
    }
  }

  extract(): T | null {
    const { container } = this
    if (!container.length) {
      return null
    }

    this.swap(container, 0, container.length - 1)
    const res = container.pop() as T
    const length = container.length
    let index = 0,
      exchange = index * 2 + 1

    while (exchange < length) {
      let right = index * 2 + 2
      if (right < length && this.compare(container[exchange], container[right])) {
        exchange = right
      }
      if (this.compare(container[exchange], container[index])) {
        break
      }
      this.swap(container, exchange, index)
      index = exchange
      exchange = index * 2 + 1
    }
    return res
  }

  swap(arr: T[], i: number, j: number): void {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  isEmpty() {
    return this.container.length === 0
  }
  topValue() {
    return this.container[0]
  }
}