
export const getAll = () => (
    (localStorage.getItem('members')) ?  JSON.parse(localStorage.getItem('members')) : []
);

export const saved = (membersObject) => {
    localStorage.removeItem('members');
    localStorage.setItem('members', JSON.stringify(membersObject));
};