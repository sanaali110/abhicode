import ListItem from "./ListItem"

const List = ({items}) => {
    return <div>
        {items.map((item) => {
            return <ListItem key={item} text="add" />
        })}
        
    </div>
}

export default List