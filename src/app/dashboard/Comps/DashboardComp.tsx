export default function DashboardComp(props: { name: any; menuActive: any; }){
    const name = props.name
    const menuActive = props.menuActive

    return(
        <div className={`${menuActive ? 'w-body' : 'w-content'} mt-content min-h-screen float-right overflow-auto`}>
            <h1>{name}</h1>
        </div>
    );
}
