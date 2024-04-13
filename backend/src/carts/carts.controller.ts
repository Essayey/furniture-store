import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Корзина')
@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get(':userId')
  async getCartByUserId(@Param('userId') userId: number) {
    return await this.cartsService.getCartByUserId(+userId)
  }

  @Post(':userId/:productId')
  async addProductToCart(@Param('userId') userId: number, @Param('productId') productId: number) {
    return await this.cartsService.addProductToCart(+userId, +productId)
  }

  @Post(':userId/:productId/:quantity')
  async changeProductQuantity(@Param('userId') userId: number, @Param('productId') productId: number, @Param('quantity') quantity: number) {
    return await this.cartsService.changeProductQuantity(+userId, +productId, +quantity)
  }

  @Delete(':userId/:productId')
  async removeProductFromCart(@Param('userId') userId: number, @Param('productId') productId: number) {
    return await this.cartsService.removeProductFromCart(+userId, +productId) 
  }

}
