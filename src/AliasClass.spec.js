import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/svelte'
import AliasClass from './AliasClass.svelte'

describe('AliasClass.svelte', () => {
  it('should render', async () => {
    const { container } = render(AliasClass)
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
  it('should render with custom class', async () => {
    const { container } = render(AliasClass, {
      props: { class: 'flex-col' },
    })
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
