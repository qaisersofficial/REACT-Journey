import {calculateInvestmentResults, formatter } from "../util/investment.js"
export default function InvestmentResults({ input }){
     // Calculate investment results based on input
    const resultsData =  calculateInvestmentResults(input);
    // Calculate initial investment
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
       return <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(data => {
                    // Calculate total interest for each year
                    const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment ; 
                    // Calculate total amount invested for each year
                    const totalAmountInvested = data.valueEndOfYear - totalInterest;
                 return  ( <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
)})}
            </tbody>
       </table>
}