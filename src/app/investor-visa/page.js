import CommonHerosection from '@/components/Common/Banner/CommonHerosection'
import InvestorVisaSolutions from '@/components/VisaServices/InvestorVisaSolutions'
import React from 'react'

const page = () => {
    return (
        <div>
            <CommonHerosection
                title="UAE Investor Visa"
                description="The UAE Investor Visa is a long-term residency option designed for entrepreneurs, shareholders, and business owners who establish or invest in licensed entities."
            />
            <InvestorVisaSolutions />
        </div>
    )
}

export default page