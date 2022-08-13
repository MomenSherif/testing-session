import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Posts from './Posts';

const fakePosts = [
  {
    id: 1,
    title: 'title one',
    body: 'body one',
    userId: 1,
  },
  {
    id: 2,
    title: 'title two',
    body: 'body two',
    userId: 2,
  },
];

const server = setupServer(
  // res.get(/posts$/)
  // res.get(getServerUrl('/posts'))
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    // console.log('FAKE SERVER!!!');
    return res(ctx.json(fakePosts));
  }),
);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<Posts />', () => {
  test('renders loading indicator when component mount', () => {
    render(<Posts />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders posts list after success data fetching', async () => {
    render(<Posts />);

    // await waitFor(() =>
    //   expect(screen.queryByText(/loading/i)).not.toBeInTheDocument(),
    // );

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    expect(screen.getAllByRole('listitem')).toHaveLength(fakePosts.length);

    fakePosts.forEach(post => {
      expect(
        screen.getByRole('heading', { level: 2, name: post.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(post.body)).toBeInTheDocument();
    });
  });

  test('renders some thing wrong if fetch posts failed', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/posts',
        (req, res, ctx) => {
          // console.log('FAKE SERVER!!!');
          return res(ctx.status(500), ctx.json({}));
        },
      ),
    );
    render(<Posts />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    expect(screen.getByRole('alert')).toHaveTextContent(
      /something went wrong/i,
    );
  });
});
