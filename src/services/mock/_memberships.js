
export const getAll = () => (
    (localStorage.getItem('memberships')) ?  JSON.parse(localStorage.getItem('memberships')) : []
);

export const saved = (membershipsObject) => {
    localStorage.removeItem('memberships');
    localStorage.setItem('memberships', JSON.stringify(membershipsObject));
};