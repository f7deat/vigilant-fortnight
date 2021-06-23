import ISidebarItemProps from "../props/sidebar-item-props"

const SidebarItem = (props: ISidebarItemProps) => (
    <div className={`sidebar-item ${props.type === props.name ? 'active' : ''}`} onClick={() => props.setType(props.name)}>
        <i className="fab fa-slack-hash"></i> {props.name}
    </div>
)

export { SidebarItem }