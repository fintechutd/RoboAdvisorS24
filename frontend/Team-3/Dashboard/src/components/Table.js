import React from "react";

export default function Table(props) {
    return (
        <div className="table-container">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Stocks</th>
                        <th className="px-4 py-2">Current Stock Price</th>
                        <th className="px-4 py-2">Amount of Stocks</th>
                        <th className="px-4 py-2">Total Amount</th>
                        <th className="px-4 py-2">% Growth</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Apple</td>
                        <td className="border px-4 py-2">$175.24</td>
                        <td className="border px-4 py-2">1.13</td>
                        <td className="border px-4 py-2">$200</td>
                        <td className="border px-4 py-2">22</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Tesla</td>
                        <td className="border px-4 py-2">$174.64</td>
                        <td className="border px-4 py-2">0.983</td>
                        <td className="border px-4 py-2">$150</td>
                        <td className="border px-4 py-2">31</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Microsoft</td>
                        <td className="border px-4 py-2">$427.62</td>
                        <td className="border px-4 py-2">1.152</td>
                        <td className="border px-4 py-2">$500</td>
                        <td className="border px-4 py-2">15</td>
                    </tr>
                    {/* Additional entries */}
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Amazon</td>
                        <td className="border px-4 py-2">$3156.97</td>
                        <td className="border px-4 py-2">0.785</td>
                        <td className="border px-4 py-2">$2500</td>
                        <td className="border px-4 py-2">20</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Google</td>
                        <td className="border px-4 py-2">$2292.76</td>
                        <td className="border px-4 py-2">0.653</td>
                        <td className="border px-4 py-2">$1500</td>
                        <td className="border px-4 py-2">25</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Facebook</td>
                        <td className="border px-4 py-2">$325.08</td>
                        <td className="border px-4 py-2">1.213</td>
                        <td className="border px-4 py-2">$400</td>
                        <td className="border px-4 py-2">18</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Netflix</td>
                        <td className="border px-4 py-2">$515.95</td>
                        <td className="border px-4 py-2">0.896</td>
                        <td className="border px-4 py-2">$450</td>
                        <td className="border px-4 py-2">10</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">NVIDIA</td>
                        <td className="border px-4 py-2">$579.65</td>
                        <td className="border px-4 py-2">1.342</td>
                        <td className="border px-4 py-2">$780</td>
                        <td className="border px-4 py-2">30</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Alibaba</td>
                        <td className="border px-4 py-2">$230.57</td>
                        <td className="border px-4 py-2">2.456</td>
                        <td className="border px-4 py-2">$600</td>
                        <td className="border px-4 py-2">12</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Shopify</td>
                        <td className="border px-4 py-2">$1165.99</td>
                        <td className="border px-4 py-2">0.456</td>
                        <td className="border px-4 py-2">$450</td>
                        <td className="border px-4 py-2">28</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
