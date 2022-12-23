import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useSyncExternalStore,
} from 'react';
import { capitalize } from '../utils';

export function createAStore<Store>(initalState: Store, prefix = 'Store') {
  function useStoreData(): {
    get: () => Store;
    set: (value: Partial<Store>) => void;
    subscribe: (onStoreChange: () => void) => () => void;
  } {
    const store = useRef(initalState);

    const get = useCallback(() => {
      return store?.current;
    }, []);

    const subscribers = useRef(new Set<() => void>());

    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store?.current, ...value };
      subscribers?.current?.forEach((callback) => callback());
    }, []);

    const subscribe = useCallback((callback: () => void) => {
      subscribers?.current?.add(callback);
      return () => subscribers?.current?.delete(callback);
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  }

  type StoreType = ReturnType<typeof useStoreData>['get'];
  type StoreSetterType = ReturnType<typeof useStoreData>['set'];
  type StoreSubscriberType = ReturnType<typeof useStoreData>['subscribe'];

  const STORE_NAME = capitalize(prefix);

  const StoreContext = createContext<StoreType | null>(null);
  const StoreSetterContext = createContext<StoreSetterType | null>(null);
  const StoreSubscriberContext = createContext<StoreSubscriberType | null>(
    null
  );

  StoreContext.displayName = STORE_NAME + 'Context';

  type ProviderProps = {
    children: ReactNode;
  };

  const StoreProvider = ({ children }: ProviderProps) => {
    const { get, set, subscribe } = useStoreData();

    const memoizedGet = useMemo(() => get, [get]);
    const memoizedSet = useMemo(() => set, [set]);
    const memoizedSubscribe = useMemo(() => subscribe, [subscribe]);
    return (
      <StoreContext.Provider value={memoizedGet}>
        <StoreSetterContext.Provider value={memoizedSet}>
          <StoreSubscriberContext.Provider value={memoizedSubscribe}>
            {children}
          </StoreSubscriberContext.Provider>
        </StoreSetterContext.Provider>
      </StoreContext.Provider>
    );
  };

  function useStore<T>(
    selector: (store: Store) => T
  ): [T, (value: Partial<Store>) => void] {
    const get = useContext(StoreContext);
    const set = useContext(StoreSetterContext);
    const subscribe = useContext(StoreSubscriberContext);

    if (get == null || subscribe == null || set == null)
      throw new Error(
        `${STORE_NAME}Store not found. use${STORE_NAME}Store must be used in a ${prefix}Provider`
      );
    const state = useSyncExternalStore(
      subscribe,
      () => selector(get()),
      () => selector(get())
    );

    return [state, set];
  }

  return { StoreProvider, useStore };
}
