export function toggleCompareMode(isDiffOnly) {
    return {
        type: 'TOGGLE_COMPARE_MODE',
        data: isDiffOnly
    }
}