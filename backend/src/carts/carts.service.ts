import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './carts.model';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/products/products.model';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CartsService {
  constructor(@InjectModel(Cart) private cartRepository: typeof Cart, 
  private productService: ProductsService) { }

  async getCartByUserId(userId: number) {
    const carts = await this.cartRepository.findAll({ where: { userId } })
    return carts
  }

  async addProductToCart(userId: number, productId: number) {
    const product = await this.productService.findOne(productId)
    if (!product) {
      throw new BadRequestException({message: 'Товара не существует'})
    }
    const cart = await this.cartRepository.findOne({ where: { userId, productId } })
    if (!cart) {
      return await this.cartRepository.create({ userId, productId, quantity: 1 })
    }
    throw new BadRequestException({message: 'Товар уже в корзине'})
  }

  async changeProductQuantity(userId: number, productId: number, quantity: number) {
    const cart = await this.cartRepository.findOne({ where: { userId, productId } })
    if (!cart) {
      throw new BadRequestException({message: 'Товара или пользователя с таким id не существует'})
    }
    if (quantity < 1 || !Number.isInteger(quantity)) {
      throw new BadRequestException({message: 'Количество должно быть больше нуля и являться целым числом'})
    }
    cart.set({ quantity })
    cart.save()
    return cart
  }

  async removeProductFromCart(userId: number, productId: number) {
    const cart = await this.cartRepository.findOne({ where: { userId, productId } })
    if (!cart) {
      throw new BadRequestException({message: 'Товара или пользователя с таким id не существует'})
    }
    cart.destroy()

    return 'Успешно'
  }
}
