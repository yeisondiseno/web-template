import React from 'react';
import { Metadata } from 'next';
// Components
import {
  Button,
  ButtonRounded,
  InputGroup,
  DropDown,
  SocialList,
  Carousel,
  Card,
  ImgCSR,
  Clock,
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
        <Button>Btn 2</Button>{' '}
        <Button variant='secondary'>Btn secondary</Button>
      </div>
      <div className='l-flex l-gap'>
        <ButtonRounded>
          <Clock />
        </ButtonRounded>
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
          <ImgCSR
            src={
              'https://images.unsplash.com/photo-1759772238808-6ce358fab418?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt='Example'
            width={300}
            height={250}
            style={{ width: '100%', objectFit: 'cover' }}
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, veniam
            iste debitis minima corporis, adipisci quo officiis deserunt
            excepturi consequuntur assumenda harum odio ab voluptatem. Atque
            provident explicabo quo temporibus.
          </p>
          <Button>More</Button>
        </Card>
        <Card>
          <ImgCSR
            src={
              'https://images.unsplash.com/photo-1755397467747-6160983f9694?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt='Example'
            width={300}
            height={250}
            style={{ width: '100%', objectFit: 'cover' }}
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, veniam
            iste debitis minima corporis, adipisci quo officiis deserunt
            excepturi consequuntur assumenda harum odio ab voluptatem. Atque
            provident explicabo quo temporibus.
          </p>
          <Button>More</Button>
        </Card>
        <Card>
          <ImgCSR
            src={
              'https://images.unsplash.com/photo-1759221793465-4795ba2eaafc?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt='Example'
            width={300}
            height={250}
            style={{ width: '100%', objectFit: 'cover' }}
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, veniam
            iste debitis minima corporis, adipisci quo officiis deserunt
            excepturi consequuntur assumenda harum odio ab voluptatem. Atque
            provident explicabo quo temporibus.
          </p>
          <Button>More</Button>
        </Card>
      </div>
      <br />
      <br />
    </main>
  );
}
