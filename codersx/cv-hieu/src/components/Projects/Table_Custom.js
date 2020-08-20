import React from 'react'
import { Table, Container } from 'react-bootstrap'

function Table_Custom() {
    return (
        <Container fluid>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Instagram clone</td>
                        <td>
                            <a href='https://instagram-clone-d70a9.web.app/'>https://instagram-clone-d70a9.web.app/</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Amazon clone</td>
                        <td>
                            <a href='https://clone-91ccb.web.app/'>https://clone-91ccb.web.app/</a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Messeger clone</td>
                        <td>
                            <a href='https://messeger-clone.web.app/'>https://messeger-clone.web.app/</a>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Typing speed</td>
                        <td>
                            <a href='https://typing-speed-c1550.web.app'>https://typing-speed-c1550.web.app</a>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Spotify clone</td>
                        <td>
                            <a href='https://spotify-clone-355bd.web.app/'>https://spotify-clone-355bd.web.app/</a>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Realtime chat</td>
                        <td>
                            <a href='https://realtime-chat-4b660.web.app/'>https://realtime-chat-4b660.web.app/</a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Table_Custom
