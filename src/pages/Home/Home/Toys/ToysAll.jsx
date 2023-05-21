import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToysAll = () => {
    return (
        <div> 
            <h2 className='text-center text-5xl font-bold mb-10 mt-4'>Toys Catagory</h2>
            <div className='flex justify-center'>
                <Tabs>
                    <TabList>
                        <Tab>Car</Tab>
                        <Tab>Bus</Tab>
                        <Tab>Truck</Tab>
                        
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                        <h2>Any content 1</h2>
                        <h2>Any content 1</h2>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        <h2>Any content 2</h2>
                        <h2>Any content 2</h2>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        <h2>Any content 2</h2>
                        <h2>Any content 2</h2>
                        <h2>Any content 2</h2>
                    </TabPanel>

                </Tabs>
            </div>
        </div>

    );
};

export default ToysAll;