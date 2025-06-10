import { PriceFeed } from '@rbx/rbx-sdk'
import createStore from './createStore'

export interface TokenPrice {
  value: number
}

export interface PriceFeedStore {
  priceFeed: PriceFeed[]
  priceFeedMap: Map<string, PriceFeed>

  loadPriceFeedsAct: (forceUpdate?: boolean) => void
}

const initialPriceFeedStore = {
  priceFeed: [],
  priceFeedMap: new Map()
}

export const usePriceFeedStore = createStore<PriceFeedStore>(
  (set, get) => ({
    ...initialPriceFeedStore,
    loadPriceFeedsAct: () => {}
  }),
  'usePriceFeedStore'
)
