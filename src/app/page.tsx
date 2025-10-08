import React from 'react';
import { Metadata } from 'next';
// Components
import {
  Button,
  InputGroup,
  DropDown,
  SocialList,
  Carousel,
  Card,
} from '@/components';

export const metadata: Metadata = {
  description: '',
};

export default function Home() {
  return (
    <main
      className='l-max-block l-flex l-flex-column l-gap'
      style={{ minHeight: '500px', paddingTop: '2rem' }}
    >
      <div className='l-flex l-gap'>
        <Button>Btn 1</Button>
        <Button>Btn 2</Button>
      </div>
      <div className='l-flex l-gap'>
        <InputGroup label='Example' />
        <InputGroup type='number' label='Example number' />
        <InputGroup type='email' label='Example email' />
        <InputGroup type='radio' label='Example radio' />
      </div>
      <div className='l-flex l-gap'>
        <DropDown title='Example'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit
          ipsam. Provident dolore laudantium nulla, doloremque sit, sapiente cum
          eos quibusdam ipsam possimus laborum! Deserunt minus corrupti
          laboriosam in omnis?
        </DropDown>

        <DropDown title='Example 2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit
          ipsam. Provident dolore laudantium nulla, doloremque sit, sapiente cum
          eos quibusdam ipsam possimus laborum! Deserunt minus corrupti
          laboriosam in omnis?
          <br />
          <br />
          <Button width='full'>Close</Button>
        </DropDown>
      </div>
      <div className='l-flex l-gap'>
        <SocialList />
      </div>
      <div className='l-flex l-gap'>
        <Carousel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolor dicta debitis soluta odit itaque quam molestiae nemo et
            voluptatem ab cumque, nostrum aut accusantium harum possimus.
            Assumenda, aliquam reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolor dicta debitis soluta odit itaque quam molestiae nemo et
            voluptatem ab cumque, nostrum aut accusantium harum possimus.
            Assumenda, aliquam reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolor dicta debitis soluta odit itaque quam molestiae nemo et
            voluptatem ab cumque, nostrum aut accusantium harum possimus.
            Assumenda, aliquam reprehenderit.
          </p>
        </Carousel>
      </div>
      <div className='l-flex l-gap'>
        <Card>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, veniam
            iste debitis minima corporis, adipisci quo officiis deserunt
            excepturi consequuntur assumenda harum odio ab voluptatem. Atque
            provident explicabo quo temporibus.
          </p>
        </Card>
      </div>
    </main>
  );
}
