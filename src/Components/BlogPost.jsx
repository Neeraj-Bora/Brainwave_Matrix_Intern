import React from 'react';
import Card from './Card.jsx';
import './CSS/BlogPost.css';

export default function BlogPost(){
    const blogs=[
        {
            title: 'Lorem, ipsum dolor.',
            date:'12/24/24',
            keywords:'elite, ipsum, reciendis,maiores',
            author:'Lorem Ipsum',
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel, illo voluptate sunt incidunt facere fugiat maiores tempora minus accusantium quos. Porro explicabo ex voluptates cupiditate, ipsa ut nam cum accusantium? Repellendus ullam provident numquam ratione reiciendis. Eligendi fugit, iusto quibusdam cum numquam sequi ad pariatur atque aliquid ullam explicabo inventore necessitatibus obcaecati consequuntur consequatur amet non Unde, harum ad saepe ducimus eaque consequatur aliquid, laborum distinctio eveniet minus repellendus voluptates ipsam maxime nostrum ipsa rem, vero doloremque neque! Quibusdam modi accusamus facere consequatur, amet error hic magni dolorum veniam molestiae, quo vel sequi? Corporis sint eum voluptatem doloribus libero.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Tempora earum aliquid illum, exercitationem nulla quis minus consectetur alias! Repellat, possimus aspernatur excepturi tenetur animi molestias iste suscipit inventore est assumenda pariatur atque cupiditate voluptas temporibus iusto alias illum veniam ratione numquam laboriosam eius quaerat? Voluptate enim alias quidem a eveniet facilis, numquam nam. Ipsum voluptatum cum quidem rem omnis molestias? Accusantium optio sapiente repudiandae nostrum, dolore voluptatem possimus eveniet cupiditate, iste consequuntur est quidem quibusdam, cumque laborum voluptatum ratione? Voluptate similique dolorem temporibus vero quod illo debitis veniam sapiente necessitatibus aliquam. Quasi, magnam nostrum mollitia officiis rerum nisi inventore officia.",
        },
        {
            title: 'Lorem, ipsum dolor.',
            date:'12/24/23',
            keywords:'elite, ipsum, reciendis,maiores',
            author:'Lorem Ipsum',
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel, illo voluptate sunt incidunt facere fugiat maiores tempora minus accusantium quos. Porro explicabo ex voluptates cupiditate, ipsa ut nam cum accusantium? Repellendus ullam provident numquam ratione reiciendis. Eligendi fugit, iusto quibusdam cum numquam sequi ad pariatur atque aliquid ullam explicabo inventore necessitatibus obcaecati consequuntur consequatur amet non Unde, harum ad saepe ducimus eaque consequatur aliquid, laborum distinctio eveniet minus repellendus voluptates ipsam maxime nostrum ipsa rem, vero doloremque neque! Quibusdam modi accusamus facere consequatur, amet error hic magni dolorum veniam molestiae, quo vel sequi? Corporis sint eum voluptatem doloribus libero.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Tempora earum aliquid illum, exercitationem nulla quis minus consectetur alias! Repellat, possimus aspernatur excepturi tenetur animi molestias iste suscipit inventore est assumenda pariatur atque cupiditate voluptas temporibus iusto alias illum veniam ratione numquam laboriosam eius quaerat? Voluptate enim alias quidem a eveniet facilis, numquam nam. Ipsum voluptatum cum quidem rem omnis molestias? Accusantium optio sapiente repudiandae nostrum, dolore voluptatem possimus eveniet cupiditate, iste consequuntur est quidem quibusdam, cumque laborum voluptatum ratione? Voluptate similique dolorem temporibus vero quod illo debitis veniam sapiente necessitatibus aliquam. Quasi, magnam nostrum mollitia officiis rerum nisi inventore officia.",
        },
        {
            title: 'Lorem, ipsum dolor.',
            date:'12/24/23',
            keywords:'elite, ipsum, reciendis,maiores',
            author:'Lorem Ipsum',
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel, illo voluptate sunt incidunt facere fugiat maiores tempora minus accusantium quos. Porro explicabo ex voluptates cupiditate, ipsa ut nam cum accusantium? Repellendus ullam provident numquam ratione reiciendis. Eligendi fugit, iusto quibusdam cum numquam sequi ad pariatur atque aliquid ullam explicabo inventore necessitatibus obcaecati consequuntur consequatur amet non Unde, harum ad saepe ducimus eaque consequatur aliquid, laborum distinctio eveniet minus repellendus voluptates ipsam maxime nostrum ipsa rem, vero doloremque neque! Quibusdam modi accusamus facere consequatur, amet error hic magni dolorum veniam molestiae, quo vel sequi? Corporis sint eum voluptatem doloribus libero.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Tempora earum aliquid illum, exercitationem nulla quis minus consectetur alias! Repellat, possimus aspernatur excepturi tenetur animi molestias iste suscipit inventore est assumenda pariatur atque cupiditate voluptas temporibus iusto alias illum veniam ratione numquam laboriosam eius quaerat? Voluptate enim alias quidem a eveniet facilis, numquam nam. Ipsum voluptatum cum quidem rem omnis molestias? Accusantium optio sapiente repudiandae nostrum, dolore voluptatem possimus eveniet cupiditate, iste consequuntur est quidem quibusdam, cumque laborum voluptatum ratione? Voluptate similique dolorem temporibus vero quod illo debitis veniam sapiente necessitatibus aliquam. Quasi, magnam nostrum mollitia officiis rerum nisi inventore officia.",
        },
        {
            title: 'Lorem, ipsum dolor.',
            date:'12/24/23',
            keywords:'elite, ipsum, reciendis,maiores',
            author:'Lorem Ipsum',
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel, illo voluptate sunt incidunt facere fugiat maiores tempora minus accusantium quos. Porro explicabo ex voluptates cupiditate, ipsa ut nam cum accusantium? Repellendus ullam provident numquam ratione reiciendis. Eligendi fugit, iusto quibusdam cum numquam sequi ad pariatur atque aliquid ullam explicabo inventore necessitatibus obcaecati consequuntur consequatur amet non Unde, harum ad saepe ducimus eaque consequatur aliquid, laborum distinctio eveniet minus repellendus voluptates ipsam maxime nostrum ipsa rem, vero doloremque neque! Quibusdam modi accusamus facere consequatur, amet error hic magni dolorum veniam molestiae, quo vel sequi? Corporis sint eum voluptatem doloribus libero.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Tempora earum aliquid illum, exercitationem nulla quis minus consectetur alias! Repellat, possimus aspernatur excepturi tenetur animi molestias iste suscipit inventore est assumenda pariatur atque cupiditate voluptas temporibus iusto alias illum veniam ratione numquam laboriosam eius quaerat? Voluptate enim alias quidem a eveniet facilis, numquam nam. Ipsum voluptatum cum quidem rem omnis molestias? Accusantium optio sapiente repudiandae nostrum, dolore voluptatem possimus eveniet cupiditate, iste consequuntur est quidem quibusdam, cumque laborum voluptatum ratione? Voluptate similique dolorem temporibus vero quod illo debitis veniam sapiente necessitatibus aliquam. Quasi, magnam nostrum mollitia officiis rerum nisi inventore officia.",
        },
        {
            title: 'Lorem, ipsum dolor.',
            date:'12/24/23',
            keywords:'elite, ipsum, reciendis,maiores',
            author:'Lorem Ipsum',
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel, illo voluptate sunt incidunt facere fugiat maiores tempora minus accusantium quos. Porro explicabo ex voluptates cupiditate, ipsa ut nam cum accusantium? Repellendus ullam provident numquam ratione reiciendis. Eligendi fugit, iusto quibusdam cum numquam sequi ad pariatur atque aliquid ullam explicabo inventore necessitatibus obcaecati consequuntur consequatur amet non Unde, harum ad saepe ducimus eaque consequatur aliquid, laborum distinctio eveniet minus repellendus voluptates ipsam maxime nostrum ipsa rem, vero doloremque neque! Quibusdam modi accusamus facere consequatur, amet error hic magni dolorum veniam molestiae, quo vel sequi? Corporis sint eum voluptatem doloribus libero.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Tempora earum aliquid illum, exercitationem nulla quis minus consectetur alias! Repellat, possimus aspernatur excepturi tenetur animi molestias iste suscipit inventore est assumenda pariatur atque cupiditate voluptas temporibus iusto alias illum veniam ratione numquam laboriosam eius quaerat? Voluptate enim alias quidem a eveniet facilis, numquam nam. Ipsum voluptatum cum quidem rem omnis molestias? Accusantium optio sapiente repudiandae nostrum, dolore voluptatem possimus eveniet cupiditate, iste consequuntur est quidem quibusdam, cumque laborum voluptatum ratione? Voluptate similique dolorem temporibus vero quod illo debitis veniam sapiente necessitatibus aliquam. Quasi, magnam nostrum mollitia officiis rerum nisi inventore officia.",
        },
        {
            title: 'Lorem, ipsum dolor.',
            date:'12/24/23',
            keywords:'elite, ipsum, reciendis,maiores',
            author:'Lorem Ipsum',
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel, illo voluptate sunt incidunt facere fugiat maiores tempora minus accusantium quos. Porro explicabo ex voluptates cupiditate, ipsa ut nam cum accusantium? Repellendus ullam provident numquam ratione reiciendis. Eligendi fugit, iusto quibusdam cum numquam sequi ad pariatur atque aliquid ullam explicabo inventore necessitatibus obcaecati consequuntur consequatur amet non Unde, harum ad saepe ducimus eaque consequatur aliquid, laborum distinctio eveniet minus repellendus voluptates ipsam maxime nostrum ipsa rem, vero doloremque neque! Quibusdam modi accusamus facere consequatur, amet error hic magni dolorum veniam molestiae, quo vel sequi? Corporis sint eum voluptatem doloribus libero.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Tempora earum aliquid illum, exercitationem nulla quis minus consectetur alias! Repellat, possimus aspernatur excepturi tenetur animi molestias iste suscipit inventore est assumenda pariatur atque cupiditate voluptas temporibus iusto alias illum veniam ratione numquam laboriosam eius quaerat? Voluptate enim alias quidem a eveniet facilis, numquam nam. Ipsum voluptatum cum quidem rem omnis molestias? Accusantium optio sapiente repudiandae nostrum, dolore voluptatem possimus eveniet cupiditate, iste consequuntur est quidem quibusdam, cumque laborum voluptatum ratione? Voluptate similique dolorem temporibus vero quod illo debitis veniam sapiente necessitatibus aliquam. Quasi, magnam nostrum mollitia officiis rerum nisi inventore officia.",
        }
    ]
    return(
        <div id='blogpost' className='blogpost p-10'>
            <h1 className='italic p-0 m-0 pl-20 text-white text-[50px]'>Famous Blog Posts</h1>
            <div className='flex flex-wrap justify-around'>
                {blogs.map((data,index)=>{
                    return(
                        <Card key={index} blog={data}/>
                    );
                })}
            </div>
            
        </div>
    );
}