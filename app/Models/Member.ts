import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public society: string

  @column()
  public name: string

  @column()
  public birthday: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
