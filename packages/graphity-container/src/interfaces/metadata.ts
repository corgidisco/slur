import { Name } from './common'

export interface MetadataStorable {
  injects: Map<Function, MetadataInject[]>
}

export interface MetadataInject {
  target: Function
  property: PropertyKey | null
  index: number
  name: Name<any>
  resolver: ((instance: any) => any) | null
}
