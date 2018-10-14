import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import ResultsList from './ResultsList'

jest.mock('../util/fetch', () => {
  const mockMovie = {
    poster_path: '/cezWGskPY5x7GaglTTRN4Fugfb8.jpg',
    adult: false,
    overview: 'This is a mock movie.',
    release_date: '2012-04-25',
    genre_ids: [878, 28, 12],
    id: 0,
    original_title: 'Mock Movie',
    original_language: 'en',
    title: 'Mock Movie',
    backdrop_path: '/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg',
    popularity: 7.353212,
    vote_count: 8503,
    video: false,
    vote_average: 7.33,
  }

  return {
    fetch: () =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [...Array(5).keys()].map((_, id) => ({
              ...mockMovie,
              id,
            })),
          }),
      }),
  }
})

afterEach(cleanup)

describe('ResultsList', () => {
  it('renders a loading message while fetching', () => {
    const {container, getByText} = render(
      <ResultsList searchText="abc" onSelectMovie={jest.fn()} />
    )
    expect(container).toMatchSnapshot()
    expect(getByText('loading ...')).toBeTruthy()
  })

  it('renders a list of movies after a successful fetch', async () => {
    const {getAllByTestId, container} = render(
      <ResultsList searchText="abc" onSelectMovie={jest.fn()} />
    )
    await new Promise(r => setTimeout(r, 10))
    expect(container).toMatchSnapshot()
    expect(getAllByTestId('result-title')).toHaveLength(5)
  })
})
