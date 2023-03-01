import ClassC from './ClassC'
import ClassB from './ClassB'

const Class = () => {
    return (
        <section id='class' className='my-6 flex flex-col gap-6'>
            <div className='w-full bg-black'>
                <h1 className='section-title'>CLASES</h1>
            </div>
            <div className='flex flex-col gap-1 md:gap-2'>
                <ClassB />
                <ClassC />
            </div>
        </section>
    )
}

export default Class