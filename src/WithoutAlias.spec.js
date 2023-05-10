import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/svelte'
import WithoutAlias from './WithoutAlias.svelte'

describe('WithoutAlias.svelte', () => {
  it('should render', async () => {
    const { container } = render(WithoutAlias)
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
  it('should render with custom class', async () => {
    const { container } = render(WithoutAlias, {
      props: { className: 'flex-col' },
    })
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
