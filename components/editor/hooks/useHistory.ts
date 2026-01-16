import { useState, useCallback } from 'react';

export function useHistory<T>(initialState: T) {
    const [historyState, setHistoryState] = useState<{
        history: T[];
        index: number;
    }>({
        history: [initialState],
        index: 0,
    });

    const { history, index } = historyState;
    const state = history[index];

    const setState = useCallback((newState: T | ((prev: T) => T)) => {
        setHistoryState((prev) => {
            const current = prev.history[prev.index];
            const resolvedState =
                typeof newState === "function"
                    ? (newState as any)(current)
                    : newState;

            // If state hasn't changed, don't add to history
            if (JSON.stringify(current) === JSON.stringify(resolvedState)) {
                return prev;
            }

            const newHistory = prev.history.slice(0, prev.index + 1);
            return {
                history: [...newHistory, resolvedState],
                index: newHistory.length, // index points to the new last item
            };
        });
    }, []);

    const undo = useCallback(() => {
        setHistoryState((prev) => ({
            ...prev,
            index: Math.max(0, prev.index - 1),
        }));
    }, []);

    const redo = useCallback(() => {
        setHistoryState((prev) => ({
            ...prev,
            index: Math.min(prev.history.length - 1, prev.index + 1),
        }));
    }, []);

    const canUndo = index > 0;
    const canRedo = index < history.length - 1;

    return {
        state,
        setState,
        undo,
        redo,
        canUndo,
        canRedo,
    };
}
