import React from 'react'

export default function Table() {
    return (
            <div className="container">
                <div className="section">
                    <h3 className="center-align white-text">HORARIO DE ATENCION</h3>
                    <table className="striped centered">
                        <thead>
                        <tr>
                            <th className="white-text">Name</th>
                            <th className="white-text">Item Name</th>
                            <th className="white-text">Item Price</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td className="white-text">Alvin</td>
                            <td className="white-text">Eclair</td>
                            <td className="white-text">$0.87</td>
                        </tr>
                        <tr>
                            <td className="white-text">Alan</td>
                            <td className="white-text">Jellybean</td>
                            <td className="white-text">$3.76</td>
                        </tr>
                        <tr>
                            <td className="white-text">Jonathan</td>
                            <td className="white-text">Lollipop</td>
                            <td className="white-text">$7.00</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

    )
}
