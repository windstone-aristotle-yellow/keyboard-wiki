import {createFileRoute} from '@tanstack/react-router'
import {Flex} from "@mantine/core";
import Sidebar from "../../layout/Sidebar.tsx";
import Content from "../../layout/Content.tsx";

const Keycaps = () => {
    return (
        <main className="main">
            <div className="main__body main__body--guide-item">
                <Flex
                    justify='flex-start'
                >
                    <Sidebar/>
                    <Content page="keycaps"/>
                </Flex>
            </div>
        </main>
    )
}

export const Route = createFileRoute('/guide/keycaps')({
    component: Keycaps
})