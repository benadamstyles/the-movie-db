import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import ResultsListItem from './ResultsListItem'

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

afterEach(cleanup)

describe('ResultsListItem', () => {
  it('handles clicks as expected', () => {
    const onSelectMovie = jest.fn()
    const {container, getByTestId} = render(
      <ResultsListItem movie={mockMovie} onSelectMovie={onSelectMovie} />
    )
    expect(container).toMatchSnapshot()
    fireEvent.click(getByTestId('result-title'))
    expect(onSelectMovie).toHaveBeenCalledWith(mockMovie)
  })
})
