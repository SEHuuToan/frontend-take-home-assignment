import { useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'

import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [selectedTab, setSelectedTab] = useState<'tab1' | 'tab2' | 'tab3'>('tab1'); // 'tab1' for all todo item, 'tab2' for pending todo item, 'tab3' for completed todo item
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root
          className="mt-10 flex"
          defaultValue="tab1"
          onValueChange={(value) => setSelectedTab(value as 'tab1' | 'tab2' | 'tab3')}
        >
          <Tabs.List
            className="flex flex-shrink-0 gap-2"
          >
            <Tabs.Trigger
              className="h-11 w-16 rounded-full font-bold border border-solid border-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="tab1"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              className="h-11 w-28 rounded-full font-bold border border-solid border-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="tab2"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className="h-11 w-36 rounded-full font-bold border border-solid border-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="tab3"
            >
              Complete
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
        <div className="pt-10">
          <TodoList filterTabFollowStatus = {selectedTab}/>
        </div>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
